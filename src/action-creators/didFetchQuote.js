export const DID_FETCH_QUOTE = 'DID_FETCH_QUOTE';
export function didFetchQuote(text, author) {
    return {
        type: DID_FETCH_QUOTE,
        text, author
    };
};