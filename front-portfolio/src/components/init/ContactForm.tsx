import { useEffect, useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, message});

        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
    };

    useEffect(() => {
        if(submitted) {
            const timer = setTimeout(() => {
                setSubmitted(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [submitted]);

    return(
        <section className='py-20 px-4 bg-gray-100'>
            <div className='max-w-3xl mx-auto text-center'>
                <h2 className='text-3xl md:text4xl font-bold mb-8'>お問い合わせ</h2>
                {submitted ? (
                    <p className='text-green-600 text-lg'>送信完了しました！</p>
                ) : (
                    <form onSubmit={handleSubmit} className='space-y-6 text-left'>
                        <div>
                            <label className='block mb-2'>お名前</label>
                            <input 
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full p-3 border border-gray-300 rounded'
                            required />
                        </div>
                        <div>
                            <label className='block mb-2'>メールアドレス</label>
                            <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full p-3 border border-gray-300 rounded'
                            required />
                        </div>
                        <div>
                            <label className='block mb-2'>メッセージ</label>
                            <textarea 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className='w-full p-3 border border-gray-300 rounded'
                            rows={5}
                            required
                            />
                        </div>
                        <button type='submit' className='bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600'>送信</button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ContactForm;