/*function sortMerge(mas){
    function merge(left, right){ 
        var result=[];
        var l=0;
        var r=0;
        while(l<left.length && r<right.length){
            if(left[l]<right[r])
                result.push(left[l++]);
            else result.push(right[r++]);
            
        }
        return result.concat(left.slice(l)).concat(right.slice(r));
    }
    function sort(items){ //sort
        if(items.length<2)return items;
        var middle = Math.floor(items.length/2);
        var left = items.slice(0, middle);
        var right = items.slice(middle);
        return merge(sort(left), sort(right));
    }
    return sort(mas);
    }*/

    const _mergeArrays = (a, b) => {
        const c = []
      
        while (a.length && b.length) {
          c.push(a[0] > b[0] ? b.shift() : a.shift())
        }
      
        //if we still have values, let's add them at the end of `c`
        while (a.length) {
          c.push(a.shift())
        }
        while (b.length) {
          c.push(b.shift())
        }
      
        return c
      }
      
      const mergeSort = (a) => {
        if (a.length < 2) return a
        const middle = Math.floor(a.length / 2)
        const a_l = a.slice(0, middle)
        const a_r = a.slice(middle, a.length)
        const sorted_l = mergeSort(a_l)
        const sorted_r = mergeSort(a_r)
        return _mergeArrays(sorted_l, sorted_r)
      }
    
    var arr=[3,42,8,-7,15,-1];
    console.log( mergeSort(arr));