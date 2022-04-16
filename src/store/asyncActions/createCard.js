import { createCardReducer } from "../../store/actions"

export const createCard = () => async (dispatche) => {
    const responseCard = await fetch(`https://api.thecatapi.com/v1/images/search`, {
          method: "GET",
    });
    const [{id, url}] = await responseCard.json();

    dispatche(createCardReducer({id, url}))

}

