import PropTypes from 'prop-types';

const List = ({ image, name, age }) => {
  return (
    <>
      <div className='flex pb-4'>
        <img src={image} alt={name} className=' w-12 h-12 rounded-full mr-4 ' />
        <div>
          <p className='text-gray-800'>{name}</p>
          <p className='text-gray-400'>{age} years</p>
        </div>
      </div>
    </>
  );
};

List.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default List;
