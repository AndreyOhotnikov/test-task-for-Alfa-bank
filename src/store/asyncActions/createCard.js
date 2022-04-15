import { createCardReducer } from "../../store/actions"

export const createCard = () => async (dispatche) => {
  console.log('yjdfz pfvtnrf')
    const responseCard = await fetch(`https://api.thecatapi.com/v1/images/search`, {
          method: "GET",
    });
    const [{id, url}] = await responseCard.json();
    console.log('++++++++++++++++++++++', {id, url})

    
    dispatche(createCardReducer({id, url}))


    // dispatche(createCardReducer())
    // else navigate((`/signin`))
    // }
}

