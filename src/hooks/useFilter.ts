import {useState} from "react";
import {Moment} from "moment";

const useFilter = () => {
    const [search, setSearch] = useState(null)
    const [date, setDate] = useState<Moment | null>(null)
    const [statuses, setStatuses] = useState([])

    return {
        filters: {
            search,
            date,
            statuses
        },
        setSearch,
        setDate,
        setStatuses
    }
}

export default useFilter