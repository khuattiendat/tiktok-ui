import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} /*className={cx('wrapper') */ className='flex items-center px-8px py-4 cursor-pointer hover:bg-gray-0.03'>
            <Image className='w-10 h-10 rounded-full object-cover' src={data.avatar} alt={data.full_name} />
            <div className='flex-1 ml-3'>
                <h4 className='text-2xl'>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className='ml-6px text-check-color' icon={faCheckCircle} />}
                </h4>
                <span className='text-2xl text-gray-0.5'>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
