export const networkLogger = (response: any) => {
  if (response?.config?.url) {
    console.log(response?.config?.baseURL + response?.config?.url);
  }
  if (response?.config?.params) {
    console.log({ params: response.config.params });
  }
  if (response?.config?.data) {
    console.log({ data: response.config.data });
  }
  if (response?.data) {
    console.log({ data: response.data });
  }
  console.log({ response });
};

export const validatestring = (value: string) => {
  if (
    value.includes(".") ||
    value.includes("/") ||
    value.includes("\\") ||
    value.includes("^") ||
    value.includes(",")
  )
    return false;
  else return true;
};

export const GetImageById = (id: number): string => {
  return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + SetPadStart(id) + ".png";
}

export const SetPadStart = (num: number): string => {
  return num.toString().padStart(3, "0");
}