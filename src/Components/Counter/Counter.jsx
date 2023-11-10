import './counter.css'

export default function Counter({count, plus, minus, total, isDisabled}) {
  return (
    <section className='counter'>
      <h1>👍카운드👎</h1>
      <p className='count'>
        {count}<span className='total'>/{total}</span>
      </p>
      <div className='btn-box'>
        <button className='btn-count' onClick={plus}>👍</button>
        {/* <button className='btn-count' onClick={show}>🔔</button> */}
        <button className='btn-count' onClick={minus} disabled={isDisabled || !count ? 'true': false}>👎</button>
      </div>
    </section>
  );
}

