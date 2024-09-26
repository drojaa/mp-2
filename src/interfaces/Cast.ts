// The Interfeace holding data of Cast Members of the TV show 'Insecure'
export interface Cast {
    person: {
        id: string;
        name: string;
        image: {
            medium: string;
        }  
    },
    character: {
        name: string;
    }
}


