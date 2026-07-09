export interface PortfolioItem {
  id: string;
  title: string;
  category: "video-editing" | "storyboard";
  image: string;
}

export const portfolioFilters = [
  { id: "all", label: "All" },
  { id: "video-editing", label: "Video Editing" },
  { id: "storyboard", label: "Storyboard" },
];

export const portfolioItems: PortfolioItem[] = [
  { id: "1", title: "REAL ESTATE", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "2", title: "WEDDING VIDEO", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "3", title: "TRAVEL VIDEO", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "4", title: "SOCIAL MEDIA", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "5", title: "PODCAST", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "6", title: "CORPORATE VIDEO", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "7", title: "COOKING", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "8", title: "Sales Pitch video editing", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "9", title: "Auction Bids video editing", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "10", title: "Wedding video editing", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "11", title: "Travel video", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "12", title: "A Music video", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "13", title: "Interview video", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "14", title: "A Cooking video", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "15", title: "A real estate video", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "16", title: "Product video editing", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "17", title: "Documentary video editing", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "18", title: "Sports Video Editing", category: "video-editing", image: "/images/placeholder-portfolio.svg" },
  { id: "19", title: "Storyboard for Music Video", category: "storyboard", image: "/images/placeholder-storyboard.svg" },
  { id: "20", title: "Storyboard for Live Action Short Film", category: "storyboard", image: "/images/placeholder-storyboard.svg" },
  { id: "21", title: "Storyboard for Motion Graphics", category: "storyboard", image: "/images/placeholder-storyboard.svg" },
];
