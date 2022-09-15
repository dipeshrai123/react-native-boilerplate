declare namespace Api {
  // TODO: - Add API types down here
  interface Login {
    success: boolean;
    data: {
      type: string;
      message: string;
      data: {
        user: {
          id: number;
          created_at: string;
          updated_at: string;
          firstname: string;
          lastname: string;
          email: string;
          password: string;
          role: string;
          verified: boolean;
        };
        token: string;
      };
    };
  }
}
