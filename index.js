filter_data = (data) => {
    let order = data.sort();

    if(order.length <= 0) {
        console.log('Must have more than 1 element');
    }
    return order.filter((item, index) => {
      return data.indexOf(item) === index;
    });
}

module.exports = filter_data;