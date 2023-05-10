import { useState } from "react";

import ProductsView from "../components/ProductsView";
import SearchBox from "../components/SearchBox";

import { IProductItem } from "../components/ProductsView/ProductItem";

const Home = () => {
  const [productList, setProductList] = useState<Array<IProductItem>>([
    {
      imgUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAxQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAD8QAAIBAwICBQcJBgcAAAAAAAABAgMEEQUSITEGE0FRcSIyYYGRscEUM0JDUnKCkqEWIzRzg9EHFSRTYuHw/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEAAgEFAQEAAAAAAAAAAAAAARECAxIhMVFBE//aAAwDAQACEQMRAD8A9/FDooGKGxRUFFDEsFRQaQFpDIoqKDSIIkGkRINICsBpESCSApIvBYqpc0KcttStCLXY2FiLMRYj5daL6+BX+Y2i+uXsZLhdstJMGV6nZr6xvwiwXq1ovpy/KLg2ZeHXPms8pq/OZ3q+q2sk0nP8pw75QuN2JtZ74mt0JOnlPxwdPjm5XifTNLWKMfA8HbWMKFRTdbc85wo4PSW+v06EFHqJSaXPcZuFjSy8emBZ5+XSmK5Wr9cxE+lUuy1j+ZkuGvzyeiqCWzzdTpVXfK3pr1sVR6SV6lzThOjBxlJRe3OeIuF/LJ6ncQDJCubiRQ6KAihsUaQUUNigIoakQWkGkUkMQESCSLRa4AQtLJaWQksAJuqjoW1WqucINrx7Dzbp4XDm+ee872rPFm4f7k4x/XL/AETOTKJjN6NHpl2smw0bCbDDtbM4FOBp2lOIGVwBcDU4gOIWGWUQHA1OIDiBllAXKJrcRcoghjlE0aNQ67VbeOOClufqBnE6vRWhuvatVrhCGPWyxHKZzWMvRsgbjxLOjw8uNFDYi4jYmgcRsUBENEBoNAxDQBIsgSQFoJFILAHN1d5lQh96XuXxMDRs1B7ryX/CCjj2v4mbBzl6dOKgG1E2h4JtI2U4lOI5xBaAS4gOI9oFoKzuIDiaHEBxIts8oipRNMoi5IDNNcD0XRejstKtT7c8ew4E0er0iCo6bQj2tZfrNY9uerNYtbRCZIbeZxEOiAoDYxNIKIxARiNiiAohoFINAWEilgJYAtBLiUmW5KMZSb5JsDjVnvr1p99Rperh8AUiU/m4t82sss5PXHEJgmCyBQ4Ba4jAZcAFTajzF025wy8ZzyXYc+rN1Jym2/R6DbZU4wo5jzlxZImwbQLQ1oBoqkyQqSNEkKkgEOG6SiubeD1dNqNOMVySwebt4/6mn6Hk7UaxcXDWnmIa95DN1hDbiyKTDUmKQaNBqmw1NikGiBqmwlNiggG72WpsWWgG72JvKj+S1Fnzls9vAMz30vIpx+1PPsTf9iT01jHJPgUVkhzeoaKKTLAhUllFgsDmOzrLOI8Fy48zZRpdVSUe3mxxTJQBghvmCyqXIXJDWBIBUXtnkfGtgzVHgDcaiHk1pvN041uBDnxqPBDTlbpRTGKLAjIbGXpK2KNNjFTYMZB7uAFqk+8NUn3kjIJSQEVH0hKj6SKpFPjJE66mvpR9oWhdTnmYL9ba9OOeUG/a/wDo2/KqS+mjl3VWNW6qTj5qxFPwX92zM9OmnE7g5JkXuLyYeihphZFJl7ghmSsg7kVkAmynxKyVkCwWTJWQqmLkG2BjMlHveAF1LO4nicab2vkJlbXEedKR7GMFGEY4XBYJsh3HWHhyi5t4zq6q505ewh7Dqqf2UQqbXl7y9lbwTp9XKS5qUsHJq9LKFv8AxUo0FnG6XFe06s1GaxJJo5170f02+i1cWtOefQYm/jtjMR3Btv0ioXMU6N7Rafc0a4XtWpxVdNeho8pc/wCHulzz8mdW3fY6U8GGp0L1e2/gNarOOOEa3lL9TM7nWMsHvHdP6VZY+8kDK7oxWZ3MV+PJ87nY9LbJ+Xa2l3Fdscxf/vULev3to8X+kXdLHN00pL4Ev1e+qfRZX1rFZd1F57ssGWpWsWv3jfhBnhLfpXpk/JqVurb7K8JQf68DqWd9a3Ef3VelVi+yE1L4lvFmYz8eolq1vBLyZv8ADg00p7qSl9ryvbxPL0KlCr1qo3dJ9VLZUhKTTi8J48cNHoXVUUkuCXJDKvjenGX1o3F7jJ1y7ydcu8xbrTYpE3GGV5SprM6kI+MkjNU1rTqfn3tuv6qFpTr70Tf6Th/tBp/0LhT+5GUvciLW6c/mre8n923l8UDh296JvXecValdT4U9KvH95Rj72F12rT8zTdv8ysl7sl5S49dfeu8pzXectUtbn9TaQ8ZyfwDVjrEvOubWH3abfvZak3YuhuH2MHVu6aSyk8vwE2NnOnFfKqiqyXN4xk7dpKjHyacFF9rLGPLlnqccNmSmwXIps6vMLcQXkgHloyGxkZoMbEyrRFhrD7BMRkWAzZF80gJW1OaalFMJMJMUtuZddHtNuk+utKMvw4OFd/4eaLWlvp0XSn2ODw0eyIybYajKXgP2DlRUlbavf0ovmlNv3s6lDo9qEKcYVddvJRisLyKefbtyeqfIHsJtbjOXno9Goz+e1G/qf1nH3YGw6Kab9ZCtV/mV5v4nc7SxSzlLlUujOj02nHT7fPe4Zf6m2lpdlR+btaMfCCRqRaFJcgjRpx82EV4INRS5JFlosIrBeCygIU2WUwinIbbTaqIQw6PnoJPTqqRTYEXwRGbhzXkgDLKj/9k=",
      name: "M2 Macbook Pro",
    },
    {
      imgUrl:
        "data:image/jpeg;base64,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",
      name: "M2 Macbook Pro",
    },
    {
      imgUrl:
        "data:image/jpeg;base64,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",
      name: "M2 Macbook Pro",
    },
    {
      imgUrl:
        "data:image/jpeg;base64,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",
      name: "M2 Macbook Pro",
    },
    {
      imgUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAxQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAD8QAAIBAwICBQcJBgcAAAAAAAABAgMEEQUSITEGE0FRcSIyYYGRscEUM0JDUnKCkqEWIzRzg9EHFSRTYuHw/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEAAgEFAQEAAAAAAAAAAAAAARECAxIhMVFBE//aAAwDAQACEQMRAD8A9/FDooGKGxRUFFDEsFRQaQFpDIoqKDSIIkGkRINICsBpESCSApIvBYqpc0KcttStCLXY2FiLMRYj5daL6+BX+Y2i+uXsZLhdstJMGV6nZr6xvwiwXq1ovpy/KLg2ZeHXPms8pq/OZ3q+q2sk0nP8pw75QuN2JtZ74mt0JOnlPxwdPjm5XifTNLWKMfA8HbWMKFRTdbc85wo4PSW+v06EFHqJSaXPcZuFjSy8emBZ5+XSmK5Wr9cxE+lUuy1j+ZkuGvzyeiqCWzzdTpVXfK3pr1sVR6SV6lzThOjBxlJRe3OeIuF/LJ6ncQDJCubiRQ6KAihsUaQUUNigIoakQWkGkUkMQESCSLRa4AQtLJaWQksAJuqjoW1WqucINrx7Dzbp4XDm+ee872rPFm4f7k4x/XL/AETOTKJjN6NHpl2smw0bCbDDtbM4FOBp2lOIGVwBcDU4gOIWGWUQHA1OIDiBllAXKJrcRcoghjlE0aNQ67VbeOOClufqBnE6vRWhuvatVrhCGPWyxHKZzWMvRsgbjxLOjw8uNFDYi4jYmgcRsUBENEBoNAxDQBIsgSQFoJFILAHN1d5lQh96XuXxMDRs1B7ryX/CCjj2v4mbBzl6dOKgG1E2h4JtI2U4lOI5xBaAS4gOI9oFoKzuIDiaHEBxIts8oipRNMoi5IDNNcD0XRejstKtT7c8ew4E0er0iCo6bQj2tZfrNY9uerNYtbRCZIbeZxEOiAoDYxNIKIxARiNiiAohoFINAWEilgJYAtBLiUmW5KMZSb5JsDjVnvr1p99Rperh8AUiU/m4t82sss5PXHEJgmCyBQ4Ba4jAZcAFTajzF025wy8ZzyXYc+rN1Jym2/R6DbZU4wo5jzlxZImwbQLQ1oBoqkyQqSNEkKkgEOG6SiubeD1dNqNOMVySwebt4/6mn6Hk7UaxcXDWnmIa95DN1hDbiyKTDUmKQaNBqmw1NikGiBqmwlNiggG72WpsWWgG72JvKj+S1Fnzls9vAMz30vIpx+1PPsTf9iT01jHJPgUVkhzeoaKKTLAhUllFgsDmOzrLOI8Fy48zZRpdVSUe3mxxTJQBghvmCyqXIXJDWBIBUXtnkfGtgzVHgDcaiHk1pvN041uBDnxqPBDTlbpRTGKLAjIbGXpK2KNNjFTYMZB7uAFqk+8NUn3kjIJSQEVH0hKj6SKpFPjJE66mvpR9oWhdTnmYL9ba9OOeUG/a/wDo2/KqS+mjl3VWNW6qTj5qxFPwX92zM9OmnE7g5JkXuLyYeihphZFJl7ghmSsg7kVkAmynxKyVkCwWTJWQqmLkG2BjMlHveAF1LO4nicab2vkJlbXEedKR7GMFGEY4XBYJsh3HWHhyi5t4zq6q505ewh7Dqqf2UQqbXl7y9lbwTp9XKS5qUsHJq9LKFv8AxUo0FnG6XFe06s1GaxJJo5170f02+i1cWtOefQYm/jtjMR3Btv0ioXMU6N7Rafc0a4XtWpxVdNeho8pc/wCHulzz8mdW3fY6U8GGp0L1e2/gNarOOOEa3lL9TM7nWMsHvHdP6VZY+8kDK7oxWZ3MV+PJ87nY9LbJ+Xa2l3Fdscxf/vULev3to8X+kXdLHN00pL4Ev1e+qfRZX1rFZd1F57ssGWpWsWv3jfhBnhLfpXpk/JqVurb7K8JQf68DqWd9a3Ef3VelVi+yE1L4lvFmYz8eolq1vBLyZv8ADg00p7qSl9ryvbxPL0KlCr1qo3dJ9VLZUhKTTi8J48cNHoXVUUkuCXJDKvjenGX1o3F7jJ1y7ydcu8xbrTYpE3GGV5SprM6kI+MkjNU1rTqfn3tuv6qFpTr70Tf6Th/tBp/0LhT+5GUvciLW6c/mre8n923l8UDh296JvXecValdT4U9KvH95Rj72F12rT8zTdv8ysl7sl5S49dfeu8pzXectUtbn9TaQ8ZyfwDVjrEvOubWH3abfvZak3YuhuH2MHVu6aSyk8vwE2NnOnFfKqiqyXN4xk7dpKjHyacFF9rLGPLlnqccNmSmwXIps6vMLcQXkgHloyGxkZoMbEyrRFhrD7BMRkWAzZF80gJW1OaalFMJMJMUtuZddHtNuk+utKMvw4OFd/4eaLWlvp0XSn2ODw0eyIybYajKXgP2DlRUlbavf0ovmlNv3s6lDo9qEKcYVddvJRisLyKefbtyeqfIHsJtbjOXno9Goz+e1G/qf1nH3YGw6Kab9ZCtV/mV5v4nc7SxSzlLlUujOj02nHT7fPe4Zf6m2lpdlR+btaMfCCRqRaFJcgjRpx82EV4INRS5JFlosIrBeCygIU2WUwinIbbTaqIQw6PnoJPTqqRTYEXwRGbhzXkgDLKj/9k=",
      name: "M2 Macbook Pro",
    },
    {
      imgUrl:
        "data:image/jpeg;base64,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",
      name: "M2 Macbook Pro",
    },
    {
      imgUrl:
        "data:image/jpeg;base64,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",
      name: "M2 Macbook Pro",
    },
    {
      imgUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAxQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwABBAUGB//EAD8QAAIBAwICBQcJBgcAAAAAAAABAgMEEQUSITEGE0FRcSIyYYGRscEUM0JDUnKCkqEWIzRzg9EHFSRTYuHw/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEAAgEFAQEAAAAAAAAAAAAAARECAxIhMVFBE//aAAwDAQACEQMRAD8A9/FDooGKGxRUFFDEsFRQaQFpDIoqKDSIIkGkRINICsBpESCSApIvBYqpc0KcttStCLXY2FiLMRYj5daL6+BX+Y2i+uXsZLhdstJMGV6nZr6xvwiwXq1ovpy/KLg2ZeHXPms8pq/OZ3q+q2sk0nP8pw75QuN2JtZ74mt0JOnlPxwdPjm5XifTNLWKMfA8HbWMKFRTdbc85wo4PSW+v06EFHqJSaXPcZuFjSy8emBZ5+XSmK5Wr9cxE+lUuy1j+ZkuGvzyeiqCWzzdTpVXfK3pr1sVR6SV6lzThOjBxlJRe3OeIuF/LJ6ncQDJCubiRQ6KAihsUaQUUNigIoakQWkGkUkMQESCSLRa4AQtLJaWQksAJuqjoW1WqucINrx7Dzbp4XDm+ee872rPFm4f7k4x/XL/AETOTKJjN6NHpl2smw0bCbDDtbM4FOBp2lOIGVwBcDU4gOIWGWUQHA1OIDiBllAXKJrcRcoghjlE0aNQ67VbeOOClufqBnE6vRWhuvatVrhCGPWyxHKZzWMvRsgbjxLOjw8uNFDYi4jYmgcRsUBENEBoNAxDQBIsgSQFoJFILAHN1d5lQh96XuXxMDRs1B7ryX/CCjj2v4mbBzl6dOKgG1E2h4JtI2U4lOI5xBaAS4gOI9oFoKzuIDiaHEBxIts8oipRNMoi5IDNNcD0XRejstKtT7c8ew4E0er0iCo6bQj2tZfrNY9uerNYtbRCZIbeZxEOiAoDYxNIKIxARiNiiAohoFINAWEilgJYAtBLiUmW5KMZSb5JsDjVnvr1p99Rperh8AUiU/m4t82sss5PXHEJgmCyBQ4Ba4jAZcAFTajzF025wy8ZzyXYc+rN1Jym2/R6DbZU4wo5jzlxZImwbQLQ1oBoqkyQqSNEkKkgEOG6SiubeD1dNqNOMVySwebt4/6mn6Hk7UaxcXDWnmIa95DN1hDbiyKTDUmKQaNBqmw1NikGiBqmwlNiggG72WpsWWgG72JvKj+S1Fnzls9vAMz30vIpx+1PPsTf9iT01jHJPgUVkhzeoaKKTLAhUllFgsDmOzrLOI8Fy48zZRpdVSUe3mxxTJQBghvmCyqXIXJDWBIBUXtnkfGtgzVHgDcaiHk1pvN041uBDnxqPBDTlbpRTGKLAjIbGXpK2KNNjFTYMZB7uAFqk+8NUn3kjIJSQEVH0hKj6SKpFPjJE66mvpR9oWhdTnmYL9ba9OOeUG/a/wDo2/KqS+mjl3VWNW6qTj5qxFPwX92zM9OmnE7g5JkXuLyYeihphZFJl7ghmSsg7kVkAmynxKyVkCwWTJWQqmLkG2BjMlHveAF1LO4nicab2vkJlbXEedKR7GMFGEY4XBYJsh3HWHhyi5t4zq6q505ewh7Dqqf2UQqbXl7y9lbwTp9XKS5qUsHJq9LKFv8AxUo0FnG6XFe06s1GaxJJo5170f02+i1cWtOefQYm/jtjMR3Btv0ioXMU6N7Rafc0a4XtWpxVdNeho8pc/wCHulzz8mdW3fY6U8GGp0L1e2/gNarOOOEa3lL9TM7nWMsHvHdP6VZY+8kDK7oxWZ3MV+PJ87nY9LbJ+Xa2l3Fdscxf/vULev3to8X+kXdLHN00pL4Ev1e+qfRZX1rFZd1F57ssGWpWsWv3jfhBnhLfpXpk/JqVurb7K8JQf68DqWd9a3Ef3VelVi+yE1L4lvFmYz8eolq1vBLyZv8ADg00p7qSl9ryvbxPL0KlCr1qo3dJ9VLZUhKTTi8J48cNHoXVUUkuCXJDKvjenGX1o3F7jJ1y7ydcu8xbrTYpE3GGV5SprM6kI+MkjNU1rTqfn3tuv6qFpTr70Tf6Th/tBp/0LhT+5GUvciLW6c/mre8n923l8UDh296JvXecValdT4U9KvH95Rj72F12rT8zTdv8ysl7sl5S49dfeu8pzXectUtbn9TaQ8ZyfwDVjrEvOubWH3abfvZak3YuhuH2MHVu6aSyk8vwE2NnOnFfKqiqyXN4xk7dpKjHyacFF9rLGPLlnqccNmSmwXIps6vMLcQXkgHloyGxkZoMbEyrRFhrD7BMRkWAzZF80gJW1OaalFMJMJMUtuZddHtNuk+utKMvw4OFd/4eaLWlvp0XSn2ODw0eyIybYajKXgP2DlRUlbavf0ovmlNv3s6lDo9qEKcYVddvJRisLyKefbtyeqfIHsJtbjOXno9Goz+e1G/qf1nH3YGw6Kab9ZCtV/mV5v4nc7SxSzlLlUujOj02nHT7fPe4Zf6m2lpdlR+btaMfCCRqRaFJcgjRpx82EV4INRS5JFlosIrBeCygIU2WUwinIbbTaqIQw6PnoJPTqqRTYEXwRGbhzXkgDLKj/9k=",
      name: "M2 Macbook Pro",
    },
    {
      imgUrl:
        "data:image/jpeg;base64,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",
      name: "M2 Macbook Pro",
    },
  ]);

  return (
    <div className="p-4 flex flex-col gap-2">
      <SearchBox />
      <ProductsView productList={productList} />
    </div>
  );
};

export default Home;
