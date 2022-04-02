import React, { useState, useEffect } from "react";

import { PokemonInterface, EvolutionInterface } from 'interfaces';

import { EvolutionGen } from 'components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { GetCurrentGenId } from 'helper/utils';

const PokemonEvolutions: React.FC<{ data: PokemonInterface['chain'] }> = ({ data }) => {

  const [evolution, setEvolution] = useState<EvolutionInterface>();

  useEffect(() => {
    BuildChain();
  }, [data]);

  function RecursiveBuildChain(currentGen: any): EvolutionInterface {
    const id = GetCurrentGenId(currentGen);
    if (!currentGen.evolves_to.length) {
      return {
        children: [],
        id,
        name: currentGen.species.name,
      };
    }

    const children = currentGen.evolves_to.map((child: any) => RecursiveBuildChain(child));

    return {
      children,
      id,
      name: currentGen.species.name,
    };
  }

  function BuildChain() {
    const id = GetCurrentGenId(data);
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

  const ArrowIcon = () =>
    <span className="arrow-icon">
      {window.innerWidth > 769 ?
        <ArrowForwardIcon /> :
        <ArrowDownwardIcon />
      }
    </span>;

  if (!evolution) return <span>Loading...</span>;

  return (
    <div className="mt-2">
      <strong>Evolutions</strong>

      <div className="d-flex align-items-center flex-column flex-md-row">
        <EvolutionGen evolution={evolution} />

        {ArrowIcon()}

        {evolution.children.length > 0 && (
          <>
            <EvolutionGen evolution={evolution.children[0]} />

            {ArrowIcon()}

            {evolution.children[0].children.length > 0 &&
              <EvolutionGen evolution={evolution.children[0].children[0]} />
            }
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonEvolutions;