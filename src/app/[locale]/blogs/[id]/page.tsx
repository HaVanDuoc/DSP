import Body_BlogDetail from '@/components/blog/Body_BlogDetail';
import { Params } from '@/models';

function BLogDetailPage({ params }: { params: Params }) {
    const { id } = params; 

    return (
        <div className="max-w-screen-xl mx-auto h-auto px-4">
            <Body_BlogDetail id={id} />
        </div>
    );
}


export default BLogDetailPage;
