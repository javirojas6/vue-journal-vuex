export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),//12333324378463483
            date: new Date().toDateString(),//sat 23, Julio
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error magni iure suscipit optio, iste tenetur corporis soluta? Fuga aliquam rerum minus nam reiciendis. Placeat sapiente facere exercitationem omnis alias!',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,//12333324378463483
            date: new Date().toDateString(),//sat 23, Julio
            text: 'Est veniam sit officia dolor laborum dolor est voluptate reprehenderit ad mollit adipisicing.',
            picture: null,
        }
        ,
        {
            id: new Date().getTime() + 2000,//12333324378463483
            date: new Date().toDateString(),//sat 23, Julio
            text: 'Nostrud aute mollit in ex voluptate aliquip consequat tempor aliqua mollit.',
            picture: null,
        }
    ]
})