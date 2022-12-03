export interface QuoteType {
  category: string;
  author: string;
  quoteText: string;
}

export interface QuoteRequest {
  quoteType: QuoteType;
}