import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: 123,
                overview:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia odit perspiciatis quod inventore aliquam ullam, laborum incidunt? At asperiores tenetur doloribus dicta nobis explicabo! Cupiditate excepturi ducimus repellat aspernatur deleniti.',
                release_date: '2000',
                title: 'Avatar',
                vote_average: 7,
                poster_path:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwxoXzwL7CPPEIna0iIaESelHuZiTWLVk4A&usqp=CAU',
            }}
        />
    ),
    environmentProps: {
        canvasHeight: 380,
    },
});
