const words = ["Lorem","ipsum","dolor","sit","amet","consectetur","adipiscing","elit","Suspendisse","fermentum","eros","sed","malesuada","faucibus","nibh","augue","tincidunt","risus","eget","pretium","sem","erat","non","metus","Aliquam","erat","volutpat","Nullam","vitae","arcu","placerat","tincidunt","felis","et","venenatis","sapien","Praesent","egestas","arcu","nec","faucibus","aliquet","Pellentesque","consequat","mauris","sit","amet","lectus","efficitur","ut","tristique","ligula","blandit","Mauris","pellentesque","euismod","tortor","sed","fermentum","Aliquam","suscipit","orci","quis","magna","egestas","malesuada","fermentum","tortor","interdum","Suspendisse","sit","amet","ornare","orci","Mauris","dapibus","erat","ut","aliquam","tincidunt","Sed","tempor","massa","ut","commodo","pretium","Aenean","ullamcorper","eget","nisi","eu","ultricies","Integer","pretium","ultricies","mauris","ultricies","aliquam","Quisque","vel","pretium","felis","Nam","neque","leo","dictum","sed","nunc","non","semper","pretium","elit"];

// reduce built-in
console.time("builtInReduce");
console.log(words.reduce((acc, val) => {
	acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {}));
console.timeEnd("builtInReduce");

// Reduce using recursion
const rreduce = (list, fn, acc) => {
	if (list.length === 0) return acc;
  const [first, ...rest] = list;
  const newAcc = fn(acc, first);
  return rreduce(rest, fn, newAcc);
};
console.time("recursiveReduce");
console.log(rreduce(words, (acc, val) => {
	acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {}));
console.timeEnd("recursiveReduce");

// Reduce using loop
const lreduce = (list, fn, acc) => {
	let res = acc;
  for (let i=0; i < list.length; i++) {
  	res = fn(res, list[i]);
  };
  return res;
};
console.time("loopReduce");
console.log(lreduce(words, (acc, val) => {
	acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {}));
console.timeEnd("loopReduce");
