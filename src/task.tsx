import React, { useEffect, useState, useCallback } from 'react';
import Sticky from 'react-stickynode';

type TFilter = {
  name: string;
  value: string;
  component: React.ReactElement;
};

interface IProps {
  items: ReadonlyArray<TFilter>;
  fetch: () => Promise<void>;
  change: (name: string, value: string) => void;
}

export const StickyFilters = ({ items, fetch, change }: IProps) => {
  const [count, updCount] = useState(0);
  useEffect(() => {
    fetch();
  });

  const onChange = useCallback((name: string, value: string) => {
    updCount((v) => v + 1);
    change(name, value);
  }, [change]);

  return (
    <Sticky top={0} enableTransforms={false}>
      <section>
        <h3>Filters</h3>
        <div>
          {items.sort((a, b) => a.name.localeCompare(b.name)).map((item, idx) => {
            const Comp = item.component;
            return (
              <div key={idx}>
                <label>{item.name}</label>
                <Comp data={item} onChange={onChange} />
              </div>
            );
          })}
        </div>
        <div>{count}</div>
      </section>
    </Sticky>
  );
};
