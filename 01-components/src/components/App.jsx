import PaintinfList from './PaintingList/PaintingList';
import Section from './Section/Section';
import paintings from '../paintings.json';

export default function App() {
    return (
        <div>
            <Section title="Топ недели">
                <PaintinfList items={paintings}/>
            </Section>
        </div>
    )
}