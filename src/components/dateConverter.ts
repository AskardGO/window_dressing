import moment from "moment";

type DateFormat = 'L' | 'LLLL' | 'D MMM YYYY' | 'D.MM.YYYY'


export default function dateConverter  (date: Date, format: DateFormat) {
    return moment(date).format(format)
}
