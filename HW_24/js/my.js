const API = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;
let color
let title
let img

$.ajax({
    url: API,
    method: `GET`,
    success: data => {
        data = JSON.parse(data);
        
        $(data).each((index, item) => {
             color = item.color
             console.log(color)
             title = item.title
             img = item.img
            
             const blocksJQ = $(`.block`)
             
        blocksJQ.each(
            function(index,item) {
               if(index === 0) {
                $(item).css(`background`, `#2e2e2e`
                )
               }
               if(index === 1) {
                $(item).css(`background`, `#43424f`)
               }
               if(index === 2) {
                $(item).css(`background`, `#000000`)
               }
               if(index === 3) {
                $(item).css(`background`, `#212252`)
               }
               if(index === 4) {
                $(item).css(`background`, `#a8a1a2`)
               }
               if(index === 5) {
                $(item).css(`background`, `#ecebec`)
               }
               if(index === 6) {
                $(item).css(`background`, `#c31030`)
               }
               if(index === 7) {
                $(item).css(`background`, `#f68b29`)
               }
               if(index === 8) {
                $(item).css(`background`, `#fbb841`)
               }
               if(index === 9) {
                $(item).css(`background`, `#bbcad0`)
               }
               if(index === 10) {
                $(item).css(`background`, `#1093da`)
               }
               if(index === 11) {
                $(item).css(`background`, `#3d7866`)
               }
               
              
               
            }

            
        )
        
        
        })

        
    }
  });
  

  