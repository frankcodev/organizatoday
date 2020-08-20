import React, {useState, useEffect, useRef, Fragment} from 'react';

const usePagination = (itemsPerPage, inicialData, keyword) => {


  let storageData = useRef();
  let storageDataFilter = useRef();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [pageNumbers, setPageNumbers] = useState([]);

 const handlePageNumbers = () =>{
  const currentData = storageDataFilter.current ? storageDataFilter.current : storageData.current;
  let numbers = [];
  for (let i = 1; i <= Math.ceil(currentData.length / itemsPerPage); i++) {
    numbers.push(i);
  } setPageNumbers(numbers)
 }

// ACTUALIZAR LA PAGINA
const handleUpdatePage = () =>{
const currentData = storageDataFilter.current ? storageDataFilter.current : storageData.current;
const indexLast = currentPage * itemsPerPage;
const indexFirst = indexLast - itemsPerPage;
const currentTodos = currentData.slice(indexFirst, indexLast);
setData(currentTodos)
}
 useEffect(()=>{
  if (inicialData) {
    storageData.current = inicialData;
    handlePageNumbers();
    handleUpdatePage();
  }
 }, [inicialData])

 useEffect(() =>{
  if (storageData.current) {
    handleUpdatePage();
  }
}, [currentPage])

const handlePage = number =>{
  setCurrentPage(number)
}

//  BUSCADOR
const handleSearch = () =>{
  if (keyword) {
    if (keyword.trim() !== "") {
     let filter = storageData.current.filter(item => {
       return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
    })
   storageDataFilter.current = filter; 
   handleUpdatePage()
   handlePageNumbers()
   setCurrentPage(1)
    }
  }
}
useEffect(() =>{
  if (keyword && keyword.trim() !== "") {
    handleSearch();
  }else{
    storageDataFilter.current = ''; 
    handleUpdatePage()
    handlePageNumbers()
  }
}, [keyword])
    const Pages = () =>(
      <Fragment>
          {storageData.current ? 
                  <div className="f wrap">
                  {pageNumbers.map(number =>(
                        <span
                        key={number}
                        onClick = {() => handlePage(number)}
                        className="link m1x"
                        style = {{color: `${currentPage === number ? `black`: ''}`}}
                       >
                        {number}
                      </span>
                   ))}
              </div>
        :
         null
        }
</Fragment>
    )
    return [data, Pages];
}
 
export default usePagination;