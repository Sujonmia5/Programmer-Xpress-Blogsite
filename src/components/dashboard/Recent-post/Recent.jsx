'use client'
import { Card, Image, Spinner, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import style from "./recent.module.css";
import { columns, renderCell } from "@/utilities/function";


function RecentPost() {

    const { data, error, isLoading } = useQuery({
        queryKey: ['dashboard_data'],
        queryFn: async () => {
            const res = await fetch(`${process.env.FETCH_URI}project`);
            const data = await res.json()
            return data;
        }
    })
    console.log(data);
    return (
        <>
            <div className="mt-5">
                {!isLoading &&
                    <Table className="w-[900px]" classNames={{
                        // base: 'shadow-none',
                        wrapper: 'shadow-none',
                    }}
                    >
                        <TableHeader columns={columns} >
                            {(column) => (
                                <TableColumn key={column.uid} className="capitalize font-bold text-lg -text-px-dark" >
                                    {column.name}
                                </TableColumn>
                            )}
                        </TableHeader>

                        <TableBody
                            items={data?.result}
                            loadingContent={<Spinner label="Loading..." />}
                        >
                            {
                                (item) => (
                                    <TableRow key={item._id}>
                                        {(columKey) => (
                                            <TableCell>
                                                {renderCell(item, columKey)}
                                            </TableCell>
                                        )
                                        }
                                    </TableRow>
                                )
                            }
                        </TableBody>

                    </Table>

                }
            </div >

        </>
    );
}
export default RecentPost;