import { create } from "zustand";

// Define the store state type
type SliderState = {
    currentSlide: string | null;
    choosenSlide: string | null;
};

// Define the store actions type
type SliderActions = {
    setCurrentSlide: (slide: string) => void;
    setChoosenSlide: (slide: string) => void;
};

// Combined type for the complete store
type SliderStore = SliderState & SliderActions;

// Create the store with proper typing
const useSliderStore = create<SliderStore>((set) => ({
    // Initial state
    currentSlide: null,
    choosenSlide: null,

    // Actions
    setCurrentSlide: (slide: string) => set({ currentSlide: slide }),
    setChoosenSlide: (slide: string) => set({ choosenSlide: slide }),
}));

export default useSliderStore;
