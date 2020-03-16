import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchVillage} from '../actions';
import Smurf from './Smurf';

const Village = ({fetchVillage, smurfs, error, isFetching}) => {
  useEffect(() => {
    fetchVillage();
  }, [fetchVillage]);

  if(isFetching) {
    return <h2>Loading Smurfs...</h2>;
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {smurfs.map(smurf => (
        <Smurf smurf={smurf} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {fetchVillage})(Village);
