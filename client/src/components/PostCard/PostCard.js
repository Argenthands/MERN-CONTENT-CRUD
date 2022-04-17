import toast from 'react-hot-toast'
import { deletePost } from '../../context/postContext'
import './PostCard.css';

export function PostCard({ post }) {

    const handleDelete = ({ title, description, _id }) => {
        toast((t) => (
            <div className='Message'>
                <h1>Are you sure you want to delete this post? <strong>{_id}</strong></h1>
                <div>
                    <button className='Button' onClick={() => { }}>Yes</button>
                    <button className='Button' onClick={() => toast.dismiss(t.id)}>No</button>
                </div>
            </div>
        ), {
            style: {
                backgroundColor: '#f44336',
                borderRadius: '15px',
                border: '5px solid #ffffff',
                padding: '10px',
                margin: '10px',
                tabSize: '5px',
            }
        })
    }

    const handleEdit = () => {
        toast((t) => (
            <div className='Message'>
                <h1>Are you sure you want to edit this post?</h1>
                <div>
                    <button className='Button' onClick={() => { }}>Yes</button>
                    <button className='Button' onClick={() => toast.dismiss(t.id)}>No</button>
                </div>
            </div>
        ), {
            style: {
                backgroundColor: '#ffeb3b',
                borderRadius: '5px',
                border: '1px solid #ffeb3b'
            }
        })
    }


    return (
        <div className='Card'>
            <h2>
                {post.title}
            </h2>
            <p>
                {post.description}
            </p>
            <div>
                <button className='Button' onClick={() => { handleDelete(post) }}>Borrar</button>
                <button className='Button' onClick={handleEdit}>Editar</button>
            </div>
        </div>
    )
}