import moment from 'moment';

export const formatDate = (date) => {
    const formattedDate = moment(date).format("D MMMM [at] HH:mm");
    return formattedDate
}