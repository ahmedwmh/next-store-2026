import EmptyList from '@/components/home/EmptyList';
import PropertiesList from '@/components/home/PropertiesList';
import { fetchFavorites } from '@/utils/actions';
import React from 'react';

async function FavoritesPage() {
  const favorites = await fetchFavorites();
  if(favorites.length === 0){
    return <EmptyList
      heading="no favorites found"
      message="try adding some favorites"
      btnText="back home"
    />
  }
  return (
    <PropertiesList properties={favorites} /> 
  )
}

export default FavoritesPage