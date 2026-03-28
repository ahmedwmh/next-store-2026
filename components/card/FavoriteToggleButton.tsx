import React from 'react'
import { Button } from '../ui/button'
import { FaHeart } from 'react-icons/fa'
import { auth } from '@clerk/nextjs/server'
import CardSignInButton from '../form/CardSignInButton';
import { fetchFavoriteId } from '@/utils/actions';
import FavoriteToogleForm from './FavoriteToogleForm';
import { fa } from 'zod/v4/locales';

async function FavoriteToggleButton({propertyId}:{propertyId:string}) {
  

  const {userId} = await auth(); //currentuser id

  if(!userId) return <CardSignInButton />

  const favoriteId = await fetchFavoriteId({propertyId});

  return (
    <FavoriteToogleForm  favoriteId={favoriteId} propertyId={propertyId} />
  )
}

export default FavoriteToggleButton