
export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Similique reprehenderit consequatur ratione deserunt, asperiores illum perferendis nihil at, officiis voluptatum magni obcaecati tenetur tempore exercitationem. Aut velit similique excepturi. Illo!',
            picture: null
        },
        {
            id: new Date().getTime()+1000,
            date: new Date().toDateString(),
            text: '2Similique reprehenderit consequatur ratione deserunt, asperiores illum perferendis nihil at, officiis voluptatum magni obcaecati tenetur tempore exercitationem. Aut velit similique excepturi. Illo!',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: '3Similique reprehenderit consequatur ratione deserunt, asperiores illum perferendis nihil at, officiis voluptatum magni obcaecati tenetur tempore exercitationem. Aut velit similique excepturi. Illo!',
            picture: null
        },
    ]
})

