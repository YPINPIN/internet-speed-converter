const CardFooter = (props) => {
  const { inputValue } = props;
  let footer = {};

  if (!inputValue) {
    footer = {
      title: '---',
      backgroundColor: '#d3d8e2',
    };
  } else if (inputValue < 15) {
    footer = {
      title: 'SLOW',
      backgroundColor: '#ee362d',
    };
  } else if (inputValue < 40) {
    footer = {
      title: 'GOOD',
      backgroundColor: '#1b82f1',
    };
  } else if (inputValue >= 40) {
    footer = {
      title: 'FAST',
      backgroundColor: '#13d569',
    };
  }

  return (
    <div
      className="card-footer"
      style={{ backgroundColor: footer.backgroundColor }}
    >
      {footer.title}
    </div>
  );
};

export default CardFooter;
