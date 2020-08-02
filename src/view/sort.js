export const createAppSortTemplate = () => {
  return (
    `
    <div class="board__sort-list">
      <a href="#" class="board__sort">SORT BY DEFAULT</a>
      <a href="#" class="board__sort">SORT BY DATE up</a>
      <a href="#" class="board__sort">SORT BY DATE down</a>
    </div>
    `
  );
};
