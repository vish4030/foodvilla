
export const filterRestaurant = (searchText, data)=>{
   let newRestaurants = data.filter((item)=>{
        if((item?.name?.toLowerCase()).includes(searchText.toLowerCase()) || searchText == "")
            return item;
    })
    return newRestaurants;
}
