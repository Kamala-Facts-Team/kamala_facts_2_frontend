import create from 'zustand'

const useStore = create(set => ({
  myths:[],
  bears: 4,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  addarraytomyths: (myth) => set(state => ({ myths: [...state.myths, myth] })),
}))

console.log(useStore.bears)

// console log usestore myths array
console.log(useStore.myths)




export default useStore