export interface QuoteType {
  category: string;
  author: string;
  quoteText: string;
  id: string;
}

export interface QuoteRequest {
  quoteType: QuoteType;
}