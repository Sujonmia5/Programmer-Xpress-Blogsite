'use client'
import ProjectPagination from "@/components/Shared/pagination/pagination";
import LoadingCard from "@/components/card/Loading";
import SingleCard from "@/components/card/card";
import { PaginationContext } from "@/context/paginationContext";
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react";

export default function Home() {
  const { itemsPerPage, currentPage, setCurrentPage } = useContext(PaginationContext);

  const { data: Data = [], isLoading = true, error } = useQuery({
    queryKey: [itemsPerPage, currentPage],
    queryFn: async () => {
      const res = await fetch(`${process.env.FETCH_URI}project?pageNumber=${currentPage}&perPage=${itemsPerPage}`);
      const items = await res.json();
      return items;
    }
  })
  const pageCount = Math.ceil(Data.dataCount / itemsPerPage);

  if (error) {
    return <div className=" grid sm:grid-cols-2 gap-4 my-10">
      {
        Array.from({ length: itemsPerPage }).map((data, i) => <LoadingCard key={i} />)
      }

    </div>
  }
  if (isLoading) {
    return <div className=" grid sm:grid-cols-2 gap-4 my-10">
      {
        Array.from({ length: itemsPerPage }).map((data, i) => <LoadingCard key={i} />)
      }
    </div>
  }


  return (
    <main className={''}>
      {/* home left side start */}
      <div className="col-span-3 md:col-span-2">
        <div className="w-full  my-5 rounded">
          <h5 className="text-xl p-2 bg-gradient-to-l -from-px-teal -to-px-primaryColor">Recent Posts</h5>
          {/* recent post start */}
          <div className='grid sm:grid-cols-2 gap-4 mt-10 mb-5'>

            {
              Array.isArray(Data.result) ? Data.result.map(item => <SingleCard key={item._id} item={item} />) : <div>data</div>
            }
          </div>
          <ProjectPagination pageCount={pageCount} />
          {/* recent post end */}
        </div>


        {/* google ads start */}
        <div className="w-full h-28 shadow-xl shadow-foreground-400 my-5">
          google ads
        </div>
        {/* google ads end */}

      </div>
      {/* home left side end */}

      <div className="w-full h-24">

      </div>
    </main>
  )
}
