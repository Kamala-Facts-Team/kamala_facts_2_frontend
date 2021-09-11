import create from 'zustand'

const useStore = create(set => ({
  myths:[],
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  addarraytomyths: (myth) => set(state => ({ myths: [...state.myths, myth] })),
}))


export default useStore