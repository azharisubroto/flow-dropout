const SearchField = () => {
  return (
    <form>
      <input type="text" placeholder="Search Article" />

      <style jsx>{`
        input {
          display: block;
          background: #f5f5f5;
          border-radius: 90px;
          border: 2px solid transparent;
          padding: 7px 20px;
          outline: none;
          transition: all 0.2s;
          margin: 0;
          width: 100%;

          &:focus,
          &:active {
            border-color: #d1d1d1;
          }
        }
      `}</style>
    </form>
  )
}

export default SearchField
