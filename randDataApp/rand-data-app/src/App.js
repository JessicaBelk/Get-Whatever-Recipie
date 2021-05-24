import Items from './components/Items';


function App() {
    const items = [{
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    }];

    return ( <
        div >
        <
        h2 > display items < /h2> <
        Items title = { items }

        /> <
        /div>
    );
}

export default App;