let num = [1, 4, 5, 6];

filter_data = (data) => {
    let order = data.sort();
    if(order.length <= 0) {
        console.log('Must have more than 1 element');
    }
    return order.filter((item, index) => {
      return order.indexOf(item) === index;
    });
}

module.exports = filter_data;