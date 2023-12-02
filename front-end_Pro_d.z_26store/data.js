const Category = {
    Flowers: '+ Квіти',
    FlowerpotStands: '+ Підставки для вазонів',
    Flowerpots: '+ Вазони для квітів',
};

let store = {
    categories: Object.values(Category),
    products: new Map([
        [Category.Flowers, [
            {id: 1, name: 'Орхідея', category: Category.Flowers, description: 'Орхідея (Phalaenopsis) "Lemon", 1 саджанець в упаковці (кімнатний), Нідерланди.', price: 540.00},
            {id: 2, name: 'Плющ', category: Category.Flowers, description: 'Плющ колхидський 2-х річний "Dentata Variegata", C2, висота 40-90см, 1 саджанець в упаковці.', price: 480.00}
        ]],
        [Category.FlowerpotStands, [
            {id: 3, name: 'Підставка кована велика', category: Category.FlowerpotStands, description: 'Підставка кована для квітів "Вежа" на 9 вазонів.', price: 2500.00},
            {id: 4, name: 'Підставка настінна', category: Category.FlowerpotStands, description: 'Підставка для квітів на 15 кілець "Пеларгонія".', price: 1500.00}
        ]],
        [Category.Flowerpots, [
            {id: 5, name: 'Вазон срібний великий', category: Category.Flowerpots, description: 'ВАЗОН ДЛЯ КВІТІВ ВИСОКИЙ ПІДЛОГОВИЙ, 7Л, КРУГЛИЙ ГЛЯНСОВИЙ (Срібний).', price: 600.00},
            {id: 6, name: 'Вазон чорний великий', category: Category.Flowerpots, description: 'ВАЗОН ДЛЯ КВІТІВ ВИСОКИЙ ПІДЛОГОВИЙ, 5Л, КРУГЛИЙ ГЛЯНСОВИЙ (Чорний).', price: 800}
        ]],
    ]),
    basket: [],
};

module.exports = store;