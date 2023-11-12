import { Tooltip } from "@nextui-org/react";
import { BiEditAlt } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

export const columns = [
    { name: "title", uid: "title" },
    { name: "category", uid: "category" },
    { name: "view", uid: "view" },
    { name: "comment", uid: "comment" },
    { name: "actions", uid: "actions" },
];

export const renderCell = (item, columnKey) => {
    console.log(item, columnKey);
    const cellValue = item[columnKey]
    switch (columnKey) {

        case `title`:

            return (
                <>
                    <h3 className="text-lg capitalize">{item.title}</h3>
                </>
            );
        case "category":
            return (
                <h1 className="text-lg capitalize" >{item.category_project}</h1>
            )
        case "view":
            return (
                <h1 className="text-lg capitalize">{item.category_project}</h1>
            )
        case "comment":
            return (
                <h1 className="text-lg capitalize"><span className="-text-px-primaryColor">{item.comments.length}</span> comment</h1>
            );
        case 'actions': return (
            <div className="relative flex items-center gap-2">
                <Tooltip color="secondary" content="Details" classNames={{
                    base: '-text-px-light',

                }}
                    placement="left"
                >
                    <span className="text-lg text-secondary cursor-pointer active:opacity-50">
                        <BsEyeFill />
                    </span>
                </Tooltip>

                <Tooltip
                    color="primary"
                    content="Edit user" classNames={{
                        base: '-text-px-light'
                    }}

                >
                    <span className="text-lg text-primary cursor-pointer active:opacity-50">
                        <BiEditAlt />
                    </span>
                </Tooltip>

                <Tooltip placement="right" color="danger" content="Delete user">
                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <MdOutlineDelete />
                    </span>
                </Tooltip>
            </div>
        );
        default:
            break;
    }
}