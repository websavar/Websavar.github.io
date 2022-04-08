import React, { useState, useEffect } from "react";

import { PokemonInterface, EvolutionInterface } from 'interfaces';
import { EvolutionGen } from 'components';
import { ArrowForwardIcon, ArrowDownwardIcon } from 'mui';
import { GetIdByUrl } from 'helper/utils';

const PokemonEvolutions: React.FC<{ data: PokemonInterface['chain'] }> = ({ data }) => {

  const [evolution, setEvolution] = useState<EvolutionInterface>();

  useEffect(() => {
    function BuildChain() {
      const id: number = GetIdByUrl(data.species.url);
      const EvolutionChildren = {
        children:
          !data.evolves_to.length
            ? []
            : data.evolves_to.map((e) => RecursiveBuildChain(e)),
        id,
        name: data.species.name,
      };
      setEvolution(EvolutionChildren);
    }

    BuildChain();
  }, [data]);

  function RecursiveBuildChain(currentGen: any): EvolutionInterface {
    const id = GetIdByUrl(currentGen.species.url);
    if (!currentGen.evolves_to.length) {
      return {
        children: [],
        id,
        name: currentGen.species.name,
      };
    }

    const children = currentGen.evolves_to.map((child: EvolutionInterface) => RecursiveBuildChain(child));

    return {
      children,
      id,
      name: currentGen.species.name,
    }
  };

  const ArrowIcon = () =>
    <span className="arrow-icon">
      {window.innerWidth > 769 ?
        <ArrowForwardIcon /> :
        <ArrowDownwardIcon />
      }
    </span>;

  if (!evolution) return <div>Loading...</div>;

  return (
    <div className="mt-2">
      <strong>Evolutions</strong>

      <div className="d-flex align-items-center flex-column flex-md-row mt-1">
        <EvolutionGen evolution={evolution} />

        {evolution.children.length > 0 && (
          <>
            {ArrowIcon()}
            <EvolutionGen evolution={evolution.children[0]} />

            {evolution.children[0].children.length > 0 &&
              <>
                {ArrowIcon()}
                <EvolutionGen evolution={evolution.children[0].children[0]} />
              </>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonEvolutions;