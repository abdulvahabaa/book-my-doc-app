
function Title({ children }) {
    return (
      <div className="font-bold text-2xl text-gray-700 dark:text-gray-400 ">
        {children}
      </div>
    );
  }

//   Title.propTypes = {
//     children: PropTypes.node.isRequired,
//   };
  
  export default Title;