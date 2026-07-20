import "./globals.css";
export const metadata = {
  title: "VSI Home Lending — Your Fort Wayne Mortgage Loan Professional",
  description: "Getting the right Fort Wayne mortgage loan for you. Purchase, refinance, FHA, VA, and conventional loans. Call (260) 338-2561.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
