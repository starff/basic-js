module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) {
    let name = members.map((item) => {
      if (typeof(item)  == 'string') {
        item = item.replace(/\s+/g, '').toUpperCase();
        return item[0];
      };
    });
    return name.sort().join('').toUpperCase();
  } else {
    return false;
  };
  
};