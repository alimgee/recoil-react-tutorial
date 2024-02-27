import { useRecoilState, useRecoilValue } from 'recoil'
import  { recoilCount, recoilSelector, modifier } from './state'



function ComponentTwo() {
  const [count, setCount] = useRecoilState(recoilCount)
  const [mod, setMod] = useRecoilState(modifier)
  const modifierCount = useRecoilValue(recoilSelector)

  return (
    <>
      
      <h1>Component Two</h1>
      <div className="card">
        <input type='number' value={mod} onChange={(e) => setMod(e.target.value)}/>
        <button onClick={() => setCount((count) => count + 1)}>
          modified count is {modifierCount}
        </button>
      </div>
    </>
  )
}

export default ComponentTwo
