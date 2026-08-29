import { useMemo } from "react";

const useSearchFilter = (users, search, filter) => {
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchValue = search.toLowerCase();

      const leadName = user.name?.toLowerCase() || "";

      const companyName =
        typeof user.company === "object"
          ? user.company?.name?.toLowerCase() || ""
          : user.company?.toLowerCase() || "";

      // Search by Name OR Company
      const matchesSearch =
        leadName.includes(searchValue) || companyName.includes(searchValue);

      // Filter by Status
      const matchesFilter = filter === "All" || user.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [users, search, filter]);

  return filteredUsers;
};

export default useSearchFilter;
