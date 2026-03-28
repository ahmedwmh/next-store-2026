'use client';

import FormContainer from '../form/FormContainer'
import { toggleFavoriteAction } from '@/utils/actions'
import CardSubmitButton from '../form/Buttons';

function FavoriteToogleForm({favoriteId, propertyId}:{favoriteId:string | null, propertyId:string}) {

  const toggleAction = toggleFavoriteAction.bind(null, {favoriteId, propertyId});
  return (
    <FormContainer actions={toggleAction}>
       <CardSubmitButton isFavorite={favoriteId ? true : false}/>
    </FormContainer>
  )
}

export default FavoriteToogleForm