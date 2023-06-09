

import axiosClient from "../api/axiosClient";
const MAP_4D_KEY ="36fe7a30f8841c5dd252cbc43c4649ff"

export const getAddressFromLocation = async (location) => {
  console.log(123);
    const locationStr = location.latitude + ',' + location.longitude;
    const url = `https://api.map4d.vn/sdk/v2/geocode?key=${MAP_4D_KEY}&location=${locationStr}`;
    const result = await axiosClient.get(url);
    if (result.code === 'ok') {
      let address = result.result[0].address;
      if (!address.includes('Việt Nam')) {
        address += ', Việt Nam';
      }
      return address;
    } else {
      return null;
    }
};

export const getAddressFromText = async (text) => {
  console.log(123);
  const url = `http://api.map4d.vn/sdk/autosuggest?key=${MAP_4D_KEY}&text=${text}`;
  const result = await axiosClient.get(url);
  if (result.code === 'ok') {
    let listAdress = result.result.slice(0, 5); //only show 5 address
    return listAdress;
  } else {
    return null;
  }
};

export const calcDistance2Location = async (location1,location2) => {
  const url = `http://api.map4d.vn/sdk/route/matrix?key=${MAP_4D_KEY}&origins=${location1}&destinations=${location2}&mode=motorcycle&language=vi&weighting=2`
  const result = await axiosClient.get(url);
  console.log(result);
  if(result.code === 'ok') {
    return result;
  } else return null;
}
